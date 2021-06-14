import { Editor, Previewer, Wrapper } from "./components";
import { Header, Footer } from "./ui";

export const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="app d-flex flex-column position-relative">
      <Header />
      <main className="container bg-light">
        <Wrapper title="editor">
          <Editor />
        </Wrapper>
        <Wrapper title="previewer">
          <Previewer />
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
};
