import React, { useRef, useState } from "react";
import { icons } from "../../icons/iconc.js";
import { Form, Input, Button } from "antd";
import { useForm } from "react-hook-form";
import { csti } from "../../feature/queryApi.js";
import { useMutation, useQueryClient } from "react-query";
import { Toast } from "primereact/toast";
import "../../App.css";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const toast = useRef(null);

  const appeals = useMutation(csti.appeals, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Muvaffaqiyatli yuborildi!",
        life: 3000
      });
      form.resetFields();
    },
    onError: () => {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Ma'lumotlarni to'liq kiritilganligini tekshiring!",
        life: 3000
      });
    }
  });

  const onFinish = (values) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Muvaffaqiyatli yuborildi!",
      life: 3000
    });
    form.resetFields()
    // appeals.mutate(values);
  };

  return (
    <div className="contact_bg" id="contact">
      <div className="container md:max-w-9xl md:mx-auto max-w-[90%] mx-auto md:py-20 py-14">
        <div>
          <span className="head_title md:text-[16px] text-[12px] text-blue-500 font-[600] uppercase flex items-center gap-2">
            {icons.contact} Biz bilan bog'lanish
          </span>
          <h2 className="font-[700] md:text-[40px] text-[24px] text-gray-800 md:leading-[50px] mb-4">
            Bizga Murojaat qiling
          </h2>
          <p className="md:text-[16px] text-[14px] text-[#737887] font-[400] mb-4 md:max-w-[700px]">
            Respublikani innovatsion va ilmiy-texnik rivojlantirish sohasida
            jamiyat va davlat hayotini rivojlantirish uchun bizga murojaat
            qiling.
          </p>
        </div>
        <div className="md:w-[50%] w-full">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="grid grid-col-1 gap-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="full_name"
                label="Ism Familiya"
                rules={[{ required: true, message: "Ismingizni kiriting!" }]}>
                <Input
                  className="rounded-md  outline-gray-400"
                  placeholder="Ism Familiyangiz"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Telefon Raqam"
                rules={[
                  { required: true, message: "Telefon raqamingizni kiriting!" }
                ]}>
                <Input
                  className="rounded-md  outline-gray-400"
                  placeholder="Telefon Raqamangiz"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="text"
              label="Murojaat Matni"
              rules={[
                { required: true, message: "Murojaatingizni kiriting!" }
              ]}>
              <TextArea
                placeholder="Murojaatingiz"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
            <Toast ref={toast} />
            <Form.Item>
              <Button  type="primary" htmlType="submit" >
                yuborish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
