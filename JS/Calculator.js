// 1.变量定义 当前输入
let currentInput = '' // 用于存储当前输入的数字或结果
// 当前操作
let currenTopation = 'null' // 没有选择操作符的情况下 ，初始时为 null 空 操作符（加、减、乘、除等）
// 上一个输入
let previousInput = '' // 用户选择一个运算符后，当前输入的数字 存到 previousInput 以便后续进行计算

function appendNumber(number){

    currentInput += number // 每次点击数字按钮时，这个函数会将数字添加到 currentInput 后面

    document.getElementById('display').value = currentInput // 通过更新页面上的输入框，将当前输入显示出来
}

function chooseOperation(operation){
    if(currentInput === '') return // 没有输入数字，不执行任何操作
    if(previousInput !== ''){

        calculateResult() // 如果之前已经输入过数字，先计算结果
    }
    currenTopation = operation // 设置当前操作符
    previousInput = currentInput // 将当前输入的数字存储为之前的数字
    currentInput = '' // 清空当前输入，等待用户输入第二个数字
}


function calculateResult(){
    // 使用if单分支语句进行判断
    if(currentInput === '' || previousInput === '') return // 返回值

    let result 
    const prev = parseFloat(previousInput)
    const current = parseFloat(currentInput)

    // switch 语句

    switch (currenTopation){
        case '+':

        result = prev + current

        break;

        case '-':

        result = prev - current

        break;

        case '*':

        result = prev * current

        break;

        case '/':
        if(current === 0){

            alert('抱歉，当前操作不能 / 零')

            return
        }
        result = prev / current
        break
        default:
        return
    }

    currentInput = result.toString() // 将结果转换为字符串并显示
    currenTopation = null // C清空操作符
    previousInput = '' // 清空之前输入的数字
    document.getElementById('display').value = currentInput // 更新显示当前
}

function clearDisplay(){
    currentInput = '' // 清空当前输入
    currenTopation = null // 清空操作符
    previousInput = '' // 清空之前输入的数字
    document.getElementById('display').value = '' // 更新显示为空
}