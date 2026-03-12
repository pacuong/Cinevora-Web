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
      <InputComponent
        id="name"
        value={name}
        placeholder="Nhập tên"
        onChange={(e) => setName(e.target.value)}
      />

      <ButtonComponent name="hoa" />
      <TabsComponent
        items={[
          {
            key: "1",
            label: "Tab 1",
            children: <div>Nội dung tab 1</div>,
          },
          {
            key: "2",
            label: "Tab 2",
            children: <div>Nội dung tab 2</div>,
          },
        ]}
      />
      <DropdownComponent
        itemLink={[
          {
            key: "1",
            text: "Trang chủ",
            href: "/",
          },
          {
            key: "2",
            text: "Phim đang chiếu",
            href: "/movies",
          },
          {
            key: "3",
            text: "Đăng xuất",
            href: "/logout",
            isDanger: true,
          },
        ]}
        textLink="Tài khoản"
      />
      <MenuComponent
        itemsData={[
          {
            key: 1,
            value: {
              label: "Trang chủ",
              link: "/",
            },
          },
          {
            key: 2,
            value: {
              label: "Phim đang chiếu",
              link: "/movies",
            },
          },
          {
            key: 3,
            value: {
              label: "Rạp",
              link: "/cinemas",
            },
          },
        ]}
        title="Danh mục"
      />
      <ModalComponent
        title="Thông tin phim"
        context={<p>Avatar 3 chuẩn bị chiếu</p>}
        modalWidth="600px"
        variant="default"
        isModalOpen={open}
        setIsModalOpen={setOpen}
      />
      <FormError error={{ message: "Email không hợp lệ" }} />
      <OfferHoverOverlay title="hi" />
    </div>
  );
}
