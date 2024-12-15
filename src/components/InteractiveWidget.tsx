import { useState } from 'react';
import { Code, Terminal } from 'lucide-react';

export function InteractiveWidget() {
  const [activeTab, setActiveTab] = useState<'hello' | 'loop'>('hello');
  const [isRunning, setIsRunning] = useState(false);
  const [response, setResponse] = useState(false);

  const codeExamples = {
    hello: {
      python: 'print("Hello, World!")',
      javascript: 'console.log("Hello, World!")',
      java: 'System.out.println("Hello, World!");',
      c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}'
    },
    loop: {
      python: 'for i in range(5):\n    print(i)',
      javascript: 'for (let i = 0; i < 5; i++) {\n    console.log(i);\n}',
      java: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}',
      c: '#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}'
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    const delayTime = 900;
    setTimeout(() => setIsRunning(false), delayTime);
    setTimeout(()=> setResponse(true), delayTime);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <Code className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-bold dark:text-white">Code Playground</h3>
      </div>
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {setActiveTab('hello'); setResponse(false);

          }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'hello'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Hello World
        </button>
        <button
          onClick={() => {setActiveTab('loop'); setResponse(false)}}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'loop'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Loop Example
        </button>
      </div>

      <div className="space-y-4">
        {Object.entries(codeExamples[activeTab]).map(([lang, code]) => (
          <div key={lang} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold dark:text-gray-300 capitalize size-7">{lang}</span>
              <Terminal className="w-4 h-4 text-gray-500" />
            </div>
            <pre className="text-sm dark:text-gray-300 font-mono">{code}</pre>
          </div>
        ))}
      </div>

      <button
        onClick={handleRun}
        disabled={isRunning}
        className={`mt-4 px-6 py-2 rounded-lg bg-green-500 text-white font-medium
                   transition-all ${isRunning ? 'opacity-50' : 'hover:bg-green-600'}`}
      >
        {isRunning ? 'Running...' : 'Run Code'}
      </button>
      <div className='mt-4 px-6 py-2 rounded-lg bg-gray-300'>
        Response : 
        {activeTab=== 'hello' ? (response ? ' Hello, World!' : '') : 
          (response ? ' 0\n1\n2\n3\n4\n5' : '')
        }
        
        
      </div>
    </div>
  );
}