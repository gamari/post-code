## npm install

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## テストケースの作成

```js
import { render, screen } from "@testing-library/react";
import { CodeEditorProvider, useCodeEditor } from "path/to/your/hooks";

// テスト用のコンポーネント
function TestComponent() {
  const { setFiles } = useCodeEditor();
  return (
    <div>setFiles: {typeof setFiles === "function" ? "function" : "null"}</div>
  );
}

// テストケース
describe("useCodeEditor Hook", () => {
  it("should provide setFiles function", () => {
    render(
      <CodeEditorProvider>
        <TestComponent />
      </CodeEditorProvider>
    );

    expect(screen.getByText(/setFiles: function/)).toBeInTheDocument();
  });

  // その他のテストケースをここに追加
});
```
