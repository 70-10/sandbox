import unittest
from sample import succ, prev

class TestSample(unittest.TestCase):
    def test_succ(self):
        self.assertEqual(succ(1), 2)
    def test_prev(self):
        self.assertEqual(prev(3), 2)

if __name__ == "__main__":
    unittest.main()
