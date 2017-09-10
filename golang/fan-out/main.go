package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"runtime"
	"sync"
)

const (
	maxQueues  = 10000
	maxWorkers = 3
)

type Dispatcher struct {
	queue chan interface{}
	wg    sync.WaitGroup
}

func NewDispatcher() *Dispatcher {
	d := &Dispatcher{
		queue: make(chan interface{}, maxQueues),
	}
	return d
}

func (d *Dispatcher) Start() {
	d.wg.Add(maxWorkers)
	for i := 0; i < maxWorkers; i++ {
		go func() {
			defer d.wg.Done()
			for v := range d.queue {
				if str, ok := v.(string); ok {
					get(str)
				}
			}
		}()
	}
}

func (d *Dispatcher) Stop() {
	close(d.queue)
	d.wg.Wait()
}

func (d *Dispatcher) StopImmediately() {
	close(d.queue)
	for range d.queue {

	}
	d.wg.Wait()
}

func (d *Dispatcher) Add(v interface{}) {
	d.queue <- v
}

func get(url string) {
	resp, err := http.DefaultClient.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("Goroutine:%d, URL:%s (%d bytes)", runtime.NumGoroutine(), url, len(body))
}

func main() {
	d := NewDispatcher()
	d.Start()
	for i := 0; i < 100; i++ {
		url := fmt.Sprintf("http://placehold.it/%dx%d", i, i)
		d.Add(url)
	}
	d.Stop()
}
