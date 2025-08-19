'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  BarChart, 
  Zap, 
  Atom, 
  Ruler,
  Target,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ToolsPage() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const tools = [
    {
      id: 'scientific-calculator',
      name: 'Scientific Calculator',
      description: 'Advanced calculator with scientific functions',
      icon: Calculator,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      subject: 'Mathematics',
      active: true
    },
    {
      id: 'graphing-calculator',
      name: 'Graphing Calculator',
      description: 'Plot and analyze mathematical functions',
      icon: BarChart,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      subject: 'Mathematics',
      active: false
    },
    {
      id: 'physics-simulator',
      name: 'Physics Simulator',
      description: 'Simulate physics experiments and phenomena',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100',
      subject: 'Physics',
      active: false
    },
    {
      id: 'chemistry-lab',
      name: 'Virtual Chemistry Lab',
      description: 'Mix chemicals and observe reactions safely',
      icon: Atom,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      subject: 'Chemistry',
      active: false
    },
    {
      id: 'geometry-tools',
      name: 'Geometry Tools',
      description: 'Measure angles, areas, and geometric properties',
      icon: Ruler,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      subject: 'Mathematics',
      active: false
    },
    {
      id: 'unit-converter',
      name: 'Unit Converter',
      description: 'Convert between different units and measurements',
      icon: Target,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100',
      subject: 'All Subjects',
      active: false
    }
  ];

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    if (previousValue !== null && operation) {
      const inputValue = parseFloat(display);
      const newValue = calculate(previousValue, inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Interactive STEM Tools
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Powerful calculators, simulators, and interactive tools to enhance your STEM learning experience.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Tool - Scientific Calculator */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-purple-600" />
                    Scientific Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-w-sm mx-auto">
                    {/* Calculator Display */}
                    <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
                      <div className="text-right text-2xl font-mono overflow-hidden">
                        {display}
                      </div>
                    </div>
                    
                    {/* Calculator Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" onClick={clearDisplay} className="col-span-2">
                        Clear
                      </Button>
                      <Button variant="outline" onClick={() => inputOperation('÷')}>
                        ÷
                      </Button>
                      <Button variant="outline" onClick={() => inputOperation('×')}>
                        ×
                      </Button>
                      
                      <Button variant="outline" onClick={() => inputNumber(7)}>7</Button>
                      <Button variant="outline" onClick={() => inputNumber(8)}>8</Button>
                      <Button variant="outline" onClick={() => inputNumber(9)}>9</Button>
                      <Button variant="outline" onClick={() => inputOperation('-')}>-</Button>
                      
                      <Button variant="outline" onClick={() => inputNumber(4)}>4</Button>
                      <Button variant="outline" onClick={() => inputNumber(5)}>5</Button>
                      <Button variant="outline" onClick={() => inputNumber(6)}>6</Button>
                      <Button variant="outline" onClick={() => inputOperation('+')}>+</Button>
                      
                      <Button variant="outline" onClick={() => inputNumber(1)}>1</Button>
                      <Button variant="outline" onClick={() => inputNumber(2)}>2</Button>
                      <Button variant="outline" onClick={() => inputNumber(3)}>3</Button>
                      <Button variant="outline" onClick={performCalculation} className="row-span-2 bg-purple-600 text-white hover:bg-purple-700">
                        =
                      </Button>
                      
                      <Button variant="outline" onClick={() => inputNumber(0)} className="col-span-2">
                        0
                      </Button>
                      <Button variant="outline" onClick={() => inputNumber('.')}>
                        .
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tools List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Tools</h2>
              <div className="space-y-4">
                {tools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card key={tool.id} className={`transition-all hover:shadow-lg ${tool.active ? 'ring-2 ring-purple-200' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 ${tool.bgColor} rounded-lg flex-shrink-0`}>
                            <IconComponent className="h-5 w-5 text-gray-700" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm">{tool.name}</h3>
                            <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {tool.subject}
                              </span>
                              {tool.active ? (
                                <span className="text-xs text-purple-600 font-medium">Active</span>
                              ) : (
                                <Link href={`/tools/${tool.id}`} className="text-xs text-blue-600 hover:text-blue-800">
                                  Launch <ChevronRight className="inline h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}