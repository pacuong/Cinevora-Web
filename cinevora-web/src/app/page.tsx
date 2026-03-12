"use client";

import ButtonComponent from "@/src/components/common/button";
import DropdownComponent from "@/src/components/common/dropdown";
import FormError from "@/src/components/common/errorForm";
import InputComponent from "@/src/components/common/input";
import MenuComponent from "@/src/components/common/menu";
import ModalComponent from "@/src/components/common/modal";
import OfferHoverOverlay from "@/src/components/common/offerHoverOverlay";
import TabsComponent from "@/src/components/common/tabs";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-white-100">hello KHoa</h1>
    </div>
  );
}
