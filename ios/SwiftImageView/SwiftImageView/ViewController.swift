import UIKit

class ViewController: UIViewController {

    @IBOutlet var backImageVieww: UIImageView!
    var count = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func changeBackImage(_ sender: Any) {
        if(self.count == 0) {
            self.backImageVieww.image = UIImage(named: "back2.jpg")
            self.count = 1
        } else {
            self.backImageVieww.image = UIImage(named: "back1.jpg")
            self.count = 0
        }
    }

}

