import React, { useEffect } from 'react';
import { Button, InputController } from 'components';
import { Form } from 'components/ui';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'components/ui/table';
import { DateInputController } from 'components/dateInputController';
import { DropdownMenuController } from 'components/dropDownMenuController';
export const MainForm = ({ form, Submit, defaultValues }: any) => {
    const values = form.getValues();

    return (
        <Form {...form}>
            <DropdownMenuController
                control={form.control}
                name="store"
                options={[
                    {
                        label: 'عليان موتورز',
                        value: 'عليان موتورز',
                    },
                    {
                        label: 'الوطني',
                        value: 'الوطني',
                    },
                    {
                        label: 'توفيق البعاوي',
                        value: 'توفيق البعاوي',
                    },
                    {
                        label: 'برونز',
                        value: ' برونز',
                    },
                ]}
                label="المعرض"
                required
                rules={{
                    required: 'هذا الحقل مطلوب',
                }}
                className="space-y-0 my-3"
                labelClassNameContanier="mt-0 "
                labelClassName="	text-base	font-medium		"
            />
            <Accordion
                type="multiple"
                // collapsible
                className="flex w-full flex-col gap-3"
                defaultValue={['person', 'car', 'finance', 'maerifin', 'ist3lam']}
            >
                <AccordionItem value="person">
                    <AccordionTrigger className="w-full bg-gray-400 text-center flex  h-10 justify-between items-center p-3">
                        <span className="text-center text-xl">معلومات الاشخاص</span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 flex flex-col gap-3">
                        <div className="w-full flex flex-col gap-2">
                            <label className="w-full"> معلومات المدين</label>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="madean_name"
                                    placeholder="اسم المدين"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المدين"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="madean_national_number"
                                    placeholder=" الرقم الوطني"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" الرقم الوطني"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="madean_phone"
                                    placeholder=" رقم الهاتف"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" رقم الهاتف"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="w-full flex gap-4">
                                <InputController
                                    control={form.control}
                                    name="madean_location"
                                    placeholder=" العنوان"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العنوان"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="madean_work"
                                    placeholder=" العمل"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العمل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="w-full"> معلومات الكفيل 1</label>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_1_name"
                                    placeholder="اسم الكفيل"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم الكفيل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_1_national_number"
                                    placeholder=" الرقم الوطني"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" الرقم الوطني"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_1_phone"
                                    placeholder=" رقم الهاتف"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" رقم الهاتف"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>

                            <div className="w-full flex gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_1_location"
                                    placeholder=" العنوان"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العنوان"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_1_work"
                                    placeholder=" العمل"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العمل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="w-full"> معلومات الكفيل 2</label>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_2_name"
                                    placeholder="اسم الكفيل"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم الكفيل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_2_national_number"
                                    placeholder=" الرقم الوطني"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" الرقم الوطني"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_2_phone"
                                    placeholder=" رقم الهاتف"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" رقم الهاتف"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>

                            <div className="w-full flex gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_2_location"
                                    placeholder=" العنوان"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العنوان"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_2_work"
                                    placeholder=" العمل"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العمل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="w-full"> معلومات الكفيل 3</label>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_3_name"
                                    placeholder="اسم الكفيل"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم الكفيل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_3_national_number"
                                    placeholder=" الرقم الوطني"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" الرقم الوطني"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_3_phone"
                                    placeholder=" رقم الهاتف"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" رقم الهاتف"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>

                            <div className="w-full flex gap-4">
                                <InputController
                                    control={form.control}
                                    name="kafeel_3_location"
                                    placeholder=" العنوان"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العنوان"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="kafeel_3_work"
                                    placeholder=" العمل"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" العمل"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>{' '}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="car">
                    <AccordionTrigger className="w-full bg-gray-400 text-center flex  h-10 justify-between items-center p-3">
                        <span className="text-center text-xl">معلومات المركبة</span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="car_type"
                                    placeholder="نوع المركبة"
                                    type="text"
                                    containerClassName="w-full"
                                    label="نوع المركبة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="car_age"
                                    placeholder="موديل المركبة"
                                    type="number"
                                    containerClassName="w-full"
                                    label="موديل المركبة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="car_number"
                                    placeholder=" رقم المركبة"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" رقم المركبة"
                                />
                            </div>

                            <div className="w-full flex gap-4">
                                <InputController
                                    control={form.control}
                                    name="tajer_name"
                                    placeholder="اسم المالك \ التاجر"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المالك \ التاجر"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="car_status"
                                    placeholder="فحص المركبة"
                                    type="text"
                                    containerClassName="w-full"
                                    label=" فحص المركبة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="finance">
                    <AccordionTrigger className="w-full bg-gray-400 text-center flex  h-10 justify-between items-center p-3">
                        <span className="text-center text-xl">معلومات مالية</span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="car_price"
                                    placeholder="سعر المركبة"
                                    type="number"
                                    containerClassName="w-full"
                                    label="سعر المركبة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />

                                <InputController
                                    control={form.control}
                                    name="dwonpayment"
                                    placeholder="قيمة الدفعه الاولى"
                                    type="number"
                                    containerClassName="w-full"
                                    label="قيمة الدفعه الاولى"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="w-full flex   gap-2">
                                <DropdownMenuController
                                    control={form.control}
                                    name="finance_charges"
                                    options={[
                                        {
                                            label: '13%',
                                            value: 0.13,
                                        },
                                        {
                                            label: '15%',
                                            value: 0.15,
                                        },
                                        {
                                            label: '17%',
                                            value: 0.17,
                                        },
                                    ]}
                                    label="نسبة المرابحه"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                    className="space-y-0"
                                    labelClassNameContanier="mt-0 "
                                    labelClassName="	text-base	font-medium		"
                                />
                                <InputController
                                    control={form.control}
                                    name="number_of_monthes"
                                    placeholder="عدد الاقساط"
                                    type="number"
                                    containerClassName="w-full"
                                    label="عدد الاقساط"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                    max={48}
                                    maxLength={48}
                                />
                            </div>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="discount"
                                    placeholder="قيمة الخصم"
                                    type="number"
                                    containerClassName="w-full"
                                    label=" قيمة الخصم"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="monthly_payment"
                                    placeholder="قمية القسط"
                                    type="number"
                                    containerClassName="w-full"
                                    label="قيمة القسط"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="total_amount"
                                    placeholder="اجمالي المبلغ"
                                    type="number"
                                    containerClassName="w-full"
                                    label="اجمالي المبلغ"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="total_amount_text"
                                    placeholder="اجمالي المبغ كتابة"
                                    type="text"
                                    containerClassName="w-full"
                                    label="اجمالي المبغ كتابة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="bill_exchange"
                                    placeholder="قيمة كمبيالة المحامي"
                                    type="number"
                                    containerClassName="w-full"
                                    label="قيمة كمبيالة المحامي"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                    disabled
                                />

                                <InputController
                                    control={form.control}
                                    name="bill_exchange_text"
                                    placeholder="قيمة كمبيالة المحامي كتابة"
                                    type="text"
                                    containerClassName="w-full"
                                    label="قيمة كمبيالة المحامي كتابة"
                                    required
                                    disabled
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-4">
                                <DateInputController
                                    control={form.control}
                                    name="first_monthly_payment_date"
                                    containerClassName="w-full"
                                    label="تاريخ اول كمبيالة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                {/* <DateInputController
                                    control={form.control}
                                    name="bill_exchange_text_date"
                                    containerClassName="w-full"
                                    label="قيمة كمبيالة المحامي كتابة"
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                /> */}
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="maerifin">
                    <AccordionTrigger className="w-full bg-gray-400 text-center flex  h-10 justify-between items-center p-3">
                        <span className="text-center text-xl">معلومات المعرفين</span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="maerif_1_name"
                                    placeholder="اسم المعرف 1 "
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المعرف 1 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_1_phone"
                                    placeholder="رقم المعرف 1 "
                                    type="number"
                                    containerClassName="w-full"
                                    label="رقم المعرف 1 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_2_name"
                                    placeholder="اسم المعرف 2 "
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المعرف 2 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_2_phone"
                                    placeholder="رقم المعرف 2 "
                                    type="number"
                                    containerClassName="w-full"
                                    label="رقم المعرف 2 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                            <div className="flex w-full gap-4">
                                <InputController
                                    control={form.control}
                                    name="maerif_3_name"
                                    placeholder="اسم المعرف 3 "
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المعرف 3 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_3_phone"
                                    placeholder="رقم المعرف 3 "
                                    type="number"
                                    containerClassName="w-full"
                                    label="رقم المعرف 3 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_4_name"
                                    placeholder="اسم المعرف 4 "
                                    type="text"
                                    containerClassName="w-full"
                                    label="اسم المعرف 4 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                                <InputController
                                    control={form.control}
                                    name="maerif_4_phone"
                                    placeholder="رقم المعرف 4 "
                                    type="number"
                                    containerClassName="w-full"
                                    label="رقم المعرف 4 "
                                    required
                                    rules={{
                                        required: 'هذا الحقل مطلوب',
                                    }}
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ist3lam">
                    <AccordionTrigger className="w-full bg-gray-400 text-center flex  h-10 justify-between items-center p-3">
                        <span className="text-center text-xl">نموذج الاستعلام</span>
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                        <Table className="w-full text-center border border-collapse">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center"></TableHead>

                                    <TableHead className="text-center">الاسم</TableHead>
                                    <TableHead className="text-center">الرقم الوطني</TableHead>
                                    <TableHead className="text-center">المهنة</TableHead>
                                    <TableHead className="text-center">مكان السكن</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="text-center">
                                    <TableCell>مدين</TableCell>
                                    <TableCell>{values?.madean_name || ' - '}</TableCell>
                                    <TableCell>{values?.madean_national_number || ' - '}</TableCell>
                                    <TableCell>{values?.madean_work || ' - '}</TableCell>
                                    <TableCell>{values?.madean_location || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>كفيل 1</TableCell>
                                    <TableCell>{values?.kafeel_1_name || ' - '}</TableCell>
                                    <TableCell>
                                        {values?.kafeel_1_national_number || ' - '}
                                    </TableCell>
                                    <TableCell>{values?.kafeel_1_work || ' - '}</TableCell>
                                    <TableCell>{values?.kafeel_1_location || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>كفيل 2</TableCell>
                                    <TableCell>{values?.kafeel_2_name || ' - '}</TableCell>
                                    <TableCell>
                                        {values?.kafeel_2_national_number || ' - '}
                                    </TableCell>
                                    <TableCell>{values?.kafeel_2_work || ' - '}</TableCell>
                                    <TableCell>{values?.kafeel_2_location || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>كفيل 2</TableCell>
                                    <TableCell>{values?.kafeel_3_name || ' - '}</TableCell>
                                    <TableCell>
                                        {values?.kafeel_3_national_number || ' - '}
                                    </TableCell>
                                    <TableCell>{values?.kafeel_3_work || ' - '}</TableCell>
                                    <TableCell>{values?.kafeel_3_location || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>سعر المركبة</TableCell>
                                    <TableCell colSpan={3}>{values?.car_price || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>الدفعه الاولى </TableCell>
                                    <TableCell colSpan={3}>
                                        {values?.dwonpayment || ' - '}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>فحص المركبة </TableCell>
                                    <TableCell colSpan={3}>{values?.car_status || ' - '}</TableCell>
                                </TableRow>
                                <TableRow className="text-center">
                                    <TableCell>التاجر </TableCell>
                                    <TableCell colSpan={3}>{values?.tajer_name || ' - '}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </AccordionContent>
                </AccordionItem>

                <div className="flex justify-between  mt-9  self-center gap-3 sm:w-full md:w-1/2  ">
                    <Button
                        type="submit"
                        className="w-full h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center"
                        onClick={form.handleSubmit(Submit)}
                        variant="secondary"
                        disabled={Object.keys(form.formState.errors).length > 0}
                    >
                        <span>تاكيد</span>
                    </Button>
                    <Button
                        type="button"
                        className="w-full h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center bg-red-400 hover:bg-red-600"
                        onClick={() => form.reset({ ...defaultValues })}
                    >
                        <span className="text-[#4D5673]">تفريغ الحقول</span>
                    </Button>
                </div>
            </Accordion>
        </Form>
    );
};
