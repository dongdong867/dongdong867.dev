import { Dock } from "./components/dock/dock";
import { Navbar } from "./components/navbar/navbar";

const MacLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Dock />
    </div>
  );
};

export default MacLayout;
