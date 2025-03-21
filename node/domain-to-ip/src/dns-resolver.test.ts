import { expect, describe, it, vi } from 'vitest';
import { domainToIPAddress } from './dns-resolver';

describe('domainToIPAddress', () => {
    describe('Success Cases', () => {
        it('should resolve a valid domain to an IP address', async () => {
            // Arrange
            const domain = 'example.com';
            const mockSocket = {
                send: vi.fn(),
                close: vi.fn(),
                on: vi.fn((event, callback) => {
                    if (event === 'message') {
                        // Simulate DNS response
                        callback(Buffer.from([
                            0x00, 0x01, // Transaction ID
                            0x81, 0x80, // Flags (Standard response)
                            0x00, 0x01, // Questions
                            0x00, 0x01, // Answer RRs
                            0x00, 0x00, // Authority RRs
                            0x00, 0x00, // Additional RRs
                            // Question section
                            0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, // example
                            0x03, 0x63, 0x6f, 0x6d, // com
                            0x00, // null terminator
                            0x00, 0x01, // Type A
                            0x00, 0x01, // Class IN
                            // Answer section
                            0xc0, 0x0c, // Name pointer
                            0x00, 0x01, // Type A
                            0x00, 0x01, // Class IN
                            0x00, 0x00, 0x00, 0x3c, // TTL
                            0x00, 0x04, // Data length
                            0x0a, 0x0b, 0x0c, 0x0d  // IP: 10.11.12.13
                        ]));
                    }
                })
            };
            vi.spyOn(require('dgram'), 'createSocket').mockReturnValue(mockSocket);

            // Act
            const result = await domainToIPAddress(domain);

            // Assert
            expect(result).toBe('10.11.12.13');
            expect(mockSocket.send).toHaveBeenCalled();
            expect(mockSocket.close).toHaveBeenCalled();
        });
    });

    describe('Invalid Domain Name Cases', () => {
        it('should throw error when domain name is not a string', async () => {
            // Arrange
            const invalidDomain = "12345";

            // Act & Assert
            await expect(domainToIPAddress(invalidDomain))
                .rejects
                .toThrow('Parameter is not a domain');
        });

        it('should throw error when domain name does not contain dot', async () => {
            // Arrange
            const invalidDomain = 'invalidomain';

            // Act & Assert
            await expect(domainToIPAddress(invalidDomain))
                .rejects
                .toThrow('Parameter is not a domain');
        });
    });
});