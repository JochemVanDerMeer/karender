function printToConsole(s: string) {
  console.log(s);
}

printToConsole("tests")

let testing = [1,2,3]

function testingout(s: string | number) {
  let test = ""
  if (typeof(test) === 'number') {
    console.log("num")
  } else {
    console.log("str")
  }

}

testingout("t")
