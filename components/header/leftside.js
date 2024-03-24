import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import WatchIcon from "@mui/icons-material/Watch";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import CableIcon from "@mui/icons-material/Cable";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Leftside() {
  return (
    <div className="hidden md:inline md:w-[40%] lg:w-[20%]">
      <div className="items-start bg-white p-2 h-[100%] rounded-md shadow-2xl">
        <SidebarMenuItem
          link="supermarket"
          text="Supermarket"
          Icon={LocalGroceryStoreIcon}
          active
        />
        <SidebarMenuItem
          link="healthbeauty"
          text="Health & Beauty"
          Icon={MedicationLiquidIcon}
        />
        <SidebarMenuItem
          link="officesupplies"
          text="Office Supplies"
          Icon={HomeWorkIcon}
        />
        <SidebarMenuItem link="watches" text="Watches" Icon={WatchIcon} />
        <SidebarMenuItem
          link="perfumes"
          text="Perfumes"
          Icon={FilterVintageIcon}
        />
        <SidebarMenuItem
          link="kindle"
          text="Kindles"
          Icon={WhatshotOutlinedIcon}
        />
        <SidebarMenuItem
          link="electronics"
          text="Electronics"
          Icon={CableIcon}
        />
      </div>
    </div>
  );
}
