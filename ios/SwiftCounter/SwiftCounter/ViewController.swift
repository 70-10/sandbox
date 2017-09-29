import UIKit

class ViewController: UIViewController {

    @IBOutlet var counterLabel: UILabel!
    
    var counter = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func countUp(_ sender: Any) {
        self.counter += 1
        self.counterLabel.text = String(self.counter)
    }
    
    @IBAction func countDown(_ sender: Any) {
        self.counter -= 1
        self.counterLabel.text = String(self.counter)
    }

}

