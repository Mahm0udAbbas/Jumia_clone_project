import Header from "@/components/header/header";
import Electronics from "@/components/recommended/electronics";
import SliderMainPage from "@/components/slider";
import Recommended from "@/components/recommended/recommended";
import Supermarket from "@/components/recommended/supermarket";
import HealthPersonalCare from "@/components/recommended/HealthPersonalCare";
import OfficeSupplies from "@/components/recommended/OfficeSupplies";
import Watches from "@/components/recommended/watches";
import LangToggel from "@/components/langToggel/LangToggel";
export default function Home() {
  return (
    <main className="md:max-w-7xl mx-auto p-2">
      <Header />
      <Recommended />
      <SliderMainPage />
      <Watches />
      <Electronics />
      <Supermarket />
      <HealthPersonalCare />
      <OfficeSupplies />
    </main>
  );
}
