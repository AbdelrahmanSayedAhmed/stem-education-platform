'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Delete, 
  RotateCcw, 
  History,
  Save,
  Trash2
} from 'lucide-react'

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [memory, setMemory] = useState(0)
  const [history, setHistory] = useState<string[]>([])

  const inputNumber = useCallback((num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }, [display, waitingForOperand])

  const inputDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }, [display, waitingForOperand])

  const clear = useCallback(() => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }, [])

  const performOperation = useCallback((nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      let result: number

      switch (operation) {
        case '+':
          result = currentValue + inputValue
          break
        case '-':
          result = currentValue - inputValue
          break
        case '*':
          result = currentValue * inputValue
          break
        case '/':
          result = inputValue !== 0 ? currentValue / inputValue : 0
          break
        case '^':
          result = Math.pow(currentValue, inputValue)
          break
        default:
          return
      }

      const historyEntry = `${currentValue} ${operation} ${inputValue} = ${result}`
      setHistory(prev => [historyEntry, ...prev.slice(0, 9)]) // Keep last 10 entries
      
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }, [display, previousValue, operation])

  const calculate = useCallback(() => {
    performOperation('=')
    setOperation(null)
    setPreviousValue(null)
    setWaitingForOperand(true)
  }, [performOperation])

  const performScientificFunction = useCallback((func: string) => {
    const inputValue = parseFloat(display)
    let result: number

    const factorialFn = (n: number): number => {
      if (n < 0) return 0
      if (n === 0) return 1
      return n * factorialFn(n - 1)
    }

    switch (func) {
      case 'sin':
        result = Math.sin(inputValue * Math.PI / 180)
        break
      case 'cos':
        result = Math.cos(inputValue * Math.PI / 180)
        break
      case 'tan':
        result = Math.tan(inputValue * Math.PI / 180)
        break
      case 'ln':
        result = Math.log(inputValue)
        break
      case 'log':
        result = Math.log10(inputValue)
        break
      case 'sqrt':
        result = Math.sqrt(inputValue)
        break
      case 'x²':
        result = inputValue * inputValue
        break
      case '1/x':
        result = inputValue !== 0 ? 1 / inputValue : 0
        break
      case '!':
        result = factorialFn(inputValue)
        break
      case 'π':
        result = Math.PI
        break
      case 'e':
        result = Math.E
        break
      default:
        return
    }

    const historyEntry = `${func}(${inputValue}) = ${result}`
    setHistory(prev => [historyEntry, ...prev.slice(0, 9)])
    
    setDisplay(String(result))
    setWaitingForOperand(true)
  }, [display])

  const memoryStore = () => setMemory(parseFloat(display))
  const memoryRecall = () => {
    setDisplay(String(memory))
    setWaitingForOperand(true)
  }
  const memoryClear = () => setMemory(0)
  const memoryAdd = () => setMemory(memory + parseFloat(display))

  const clearHistory = () => setHistory([])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calculator */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Scientific Calculator
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={clear}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setDisplay(display.slice(0, -1) || '0')}>
                    <Delete className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Display */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-right text-2xl md:text-3xl font-mono font-bold min-h-[2rem] overflow-hidden">
                  {display}
                </div>
              </div>

              {/* Scientific Functions Row 1 */}
              <div className="grid grid-cols-5 gap-2">
                <Button variant="outline" onClick={() => performScientificFunction('sin')}>sin</Button>
                <Button variant="outline" onClick={() => performScientificFunction('cos')}>cos</Button>
                <Button variant="outline" onClick={() => performScientificFunction('tan')}>tan</Button>
                <Button variant="outline" onClick={() => performScientificFunction('ln')}>ln</Button>
                <Button variant="outline" onClick={() => performScientificFunction('log')}>log</Button>
              </div>

              {/* Scientific Functions Row 2 */}
              <div className="grid grid-cols-5 gap-2">
                <Button variant="outline" onClick={() => performScientificFunction('sqrt')}>√</Button>
                <Button variant="outline" onClick={() => performScientificFunction('x²')}>x²</Button>
                <Button variant="outline" onClick={() => performOperation('^')}>x^y</Button>
                <Button variant="outline" onClick={() => performScientificFunction('1/x')}>1/x</Button>
                <Button variant="outline" onClick={() => performScientificFunction('!')}>n!</Button>
              </div>

              {/* Constants and Memory */}
              <div className="grid grid-cols-5 gap-2">
                <Button variant="outline" onClick={() => performScientificFunction('π')}>π</Button>
                <Button variant="outline" onClick={() => performScientificFunction('e')}>e</Button>
                <Button variant="outline" onClick={memoryStore}>MS</Button>
                <Button variant="outline" onClick={memoryRecall}>MR</Button>
                <Button variant="outline" onClick={memoryClear}>MC</Button>
              </div>

              {/* Number pad and operations */}
              <div className="grid grid-cols-4 gap-2">
                <Button variant="outline" onClick={clear} className="bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800">
                  C
                </Button>
                <Button variant="outline" onClick={() => setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display)}>
                  ±
                </Button>
                <Button variant="outline" onClick={() => performOperation('%')}>%</Button>
                <Button variant="outline" onClick={() => performOperation('/')} className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800">
                  ÷
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => inputNumber('7')}>7</Button>
                <Button onClick={() => inputNumber('8')}>8</Button>
                <Button onClick={() => inputNumber('9')}>9</Button>
                <Button variant="outline" onClick={() => performOperation('*')} className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800">
                  ×
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => inputNumber('4')}>4</Button>
                <Button onClick={() => inputNumber('5')}>5</Button>
                <Button onClick={() => inputNumber('6')}>6</Button>
                <Button variant="outline" onClick={() => performOperation('-')} className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800">
                  −
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => inputNumber('1')}>1</Button>
                <Button onClick={() => inputNumber('2')}>2</Button>
                <Button onClick={() => inputNumber('3')}>3</Button>
                <Button variant="outline" onClick={() => performOperation('+')} className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800">
                  +
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <Button onClick={() => inputNumber('0')} className="col-span-2">0</Button>
                <Button onClick={inputDecimal}>.</Button>
                <Button onClick={calculate} className="bg-orange-500 hover:bg-orange-600 text-white">
                  =
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* History */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <History className="mr-2 h-5 w-5" />
                  History
                </div>
                <Button size="sm" variant="outline" onClick={clearHistory}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {history.length === 0 ? (
                  <p className="text-muted-foreground text-center">No calculations yet</p>
                ) : (
                  history.map((entry, index) => (
                    <div 
                      key={index}
                      className="p-2 bg-muted rounded text-sm font-mono cursor-pointer hover:bg-muted/80"
                      onClick={() => {
                        const result = entry.split('=')[1]?.trim()
                        if (result) {
                          setDisplay(result)
                          setWaitingForOperand(true)
                        }
                      }}
                    >
                      {entry}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Memory Display */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Save className="mr-2 h-5 w-5" />
                Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-mono text-center p-2 bg-muted rounded">
                {memory}
              </div>
              <Button 
                className="w-full mt-2" 
                variant="outline" 
                onClick={memoryAdd}
              >
                M+
              </Button>
            </CardContent>
          </Card>

          {/* Help */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Help</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>MS:</strong> Memory Store</p>
              <p><strong>MR:</strong> Memory Recall</p>
              <p><strong>MC:</strong> Memory Clear</p>
              <p><strong>M+:</strong> Memory Add</p>
              <p><strong>sin/cos/tan:</strong> In degrees</p>
              <p><strong>ln:</strong> Natural logarithm</p>
              <p><strong>log:</strong> Base 10 logarithm</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}