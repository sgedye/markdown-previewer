import { useState } from "react";
import marked from "marked";
import hljs from "highlight.js";

import { Wrapper } from "./components";
import { Header, Footer } from "./ui";

export const App: React.FC<Record<string, never>> = () => {
  const [input, setInput] = useState<string>(initialString);

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code, lang) => {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
    gfm: true,
    breaks: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="app d-flex flex-column position-relative">
      <Header />
      <main className="container">
        <Wrapper title="editor">
          <textarea
            name="editor"
            id="editor"
            className="p-3"
            cols={30}
            rows={20}
            value={input}
            onChange={handleChange}
          ></textarea>
        </Wrapper>
        <Wrapper title="previewer">
          <div
            id="preview"
            className="bg-white border p-3"
            dangerouslySetInnerHTML={{
              __html: marked(input),
            }}
          ></div>
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
};

const initialString = `# Markdown Previewer
> This previewer was written as partial completion of the Free Code Camp [Front End Libraries Certification](https://www.freecodecamp.org/learn/front-end-libraries).
---
## Getting Started
You can simply type markdown into the editor and the previewer will display how it will look. Or [view the github repository](https://github.com/sgedye/markdown-previewer).

---
### This project uses:
- Webpack + React + Typescript
- marked + highlight.js
![dev favicon](https://raw.githubusercontent.com/sgedye/markdown-previewer/main/public/fav_dev.png) ![prod favicon](https://raw.githubusercontent.com/sgedye/markdown-previewer/main/public/fav_prod.png)\n
---
\`\`\`;
// this is multi-line code:  
function anotherExample(firstLine, lastLine) {
  if (firstLine == "" && lastLine == "") {
    return multiLineCode;
  }
}
\`\`\`
\`console.log("Show this single line code block");\`
**end.**
`;
