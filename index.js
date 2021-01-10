const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (record) => {
  const preferredResult = record.find(({ result }) => result === "W");
  return (preferredResult ? preferredResult.year : undefined)
}