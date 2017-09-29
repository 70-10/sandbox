import UIKit

class ViewController: UIViewController {
    
    var str = "string"
    var str1 = "hogehoge"
    var result = ""
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.result = self.str1 + self.str
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

