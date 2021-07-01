import $ from "jquery"
import _ from "lodash-es"

const text = _.upperCase("hello, webpack app")
$("body").html(text)