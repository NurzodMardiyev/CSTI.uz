import React, { useRef, useState } from "react";
import { icons } from "../../icons/iconc.js";
// import { Select } from "antd";
import { Input } from "antd";
import "../../App.css";
import { useForm } from "react-hook-form";
import { csti } from "../../feature/queryApi.js";
import { useMutation, useQueryClient } from "react-query";

import { Toast } from "primereact/toast";

const { TextArea } = Input;

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
export default function Contact() {
  const [valueAppeal, setValueAppeal] = useState();
  const { register, handleSubmit, reset, setValue } = useForm();
  const toast = useRef(null);

  const queryClient = useQueryClient();

  const appeals = useMutation(csti.appeals, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      showSuccess();
      setValueAppeal("");
      reset();
    },
    onError: () => {
      showError();
      console.log("error mutation");
    },
  });

  const handletakeValue = (data) => {
    appeals.mutate(data);

    setValue("text", valueAppeal);

    console.log(data);
  };

  // If code success give to backend

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Muvaffaqiyatli yuborildi!",
      life: 3000,
    });
  };

  // If code error give to backend
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Ma'lumotlarn to'liq kiritilganga ishonch hosil qiling!",
      life: 3000,
    });
  };
  return (
    <div className="contact_bg" id="contact">
      <div className="container md:max-w-9xl md:mx-auto flex flex-col justify-start max-w-[90%] mx-auto items-start md:py-20 py-14">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase flex items-center gap-2">
            {icons.contact} Biz bilan bog'lanish
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Bizga Murojaat qiling
          </h2>
          <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] mb-4 md:max-w-[700px]">
            Respublikani innovatsion va ilmiy-texnik rivojlantirish sohasida
            jamiyat va davlat hayotini har tomonlama rivojlantirishga,
            mamlakatning intellektual va texnologik salohiyatini oshirish uchun
            bizga murojat qiling.
          </p>
        </div>
        <div className="md:w-[70%] w-full">
          <form
            action=""
            className="grid grid-col-1 gap-x-6 gap-y-6"
            onSubmit={handleSubmit(handletakeValue)}
          >
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    id="fio_otm"
                    name="fio_otm"
                    type="text"
                    autoComplete="kotibining-kompetentsiyasi"
                    className="dark:bg-gray-700 dark:text-white text-[16px]  dark:ring-0 block w-full  border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Ism Familiyangiz"
                    {...register("full_name")}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    id="fio_otm"
                    name="fio_otm"
                    type="text"
                    autoComplete="kotibining-kompetentsiyasi"
                    className="dark:bg-gray-700 dark:text-white text-[16px]  dark:ring-0 block w-full  border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Telefon Raqamangiz"
                    {...register("phone")}
                  />
                </div>
              </div>
            </div>
            <TextArea
              value={valueAppeal}
              onChange={(e) => setValueAppeal(e.target.value)}
              placeholder="Murojaatingiz"
              className="w-full "
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
            <Toast ref={toast} />
            <div>
              <button className="px-10 py-3 bg-blue-500 text-white uppercase font-[500]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
