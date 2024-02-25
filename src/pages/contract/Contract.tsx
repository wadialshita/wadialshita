import moment from 'moment';
import React from 'react';

export const Contract = ({ form }: any) => {
    const values = form.getValues();
    const today = moment().format('YYYY-MM-DD');

    return (
        <div role="main" className="form-all mb-0 mt-0 " id="Contract" dir="rtl">
            <table className="table-bordered text-dark">
                <tbody>
                    <tr style={{ height: '34px' }}>
                        <td className="s0 text-center fw-bold" colSpan={7}>
                            اتفاقية بيع مركبه بالاقساط
                        </td>
                        <td>
                            <span className="pe-5">
                                التاريخ:
                                <span id="date_value">{today}</span>
                            </span>
                        </td>
                    </tr>
                    <tr className="fw-bold" style={{ height: '30px', fontSize: '12px' }}>
                        <td className="s3" colSpan={3}>
                            المدين: <span id="buyer_name">{values.madean_name}</span>
                        </td>
                        <td className="s2" colSpan={3}>
                            ر.وطني: <span id="buyer_id">{values.madean_national_number}</span>
                        </td>
                        <td className="s1" colSpan={3}>
                            <span id="buyer_phone">{values.madean_phone}</span>
                        </td>
                    </tr>
                    <tr className="fw-bold" style={{ height: '30px', fontSize: '12px' }}>
                        <td className="s3" colSpan={4}>
                            نوع السيارة: <span id="car_make">{values.car_type}</span>
                        </td>
                        <td className="s2" colSpan={2}>
                            موديل: <span id="car_model">{values.car_age}</span>
                        </td>
                        <td className="s2" colSpan={3}>
                            رقم اللوحة: <span id="car_num">{values.car_number}</span>
                        </td>
                    </tr>
                    <tr className="fw-bold" style={{ height: '30px', fontSize: '12px' }}>
                        <td className="s3" colSpan={9}>
                            اسم مالك المركبه : <span id="car_owner">{values.tajer_name}</span>
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            لا يحق للمشتري الاعتراض او المراجعه في حالة المركبه او قيمتها او الرجوع
                            في اي عيوب ظاهره او خفيه, ولا المطالبه باية نواقص او متعلقات بالمركبه
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            المشتري مسؤول عن فحص المركبه و يحق للمشتري اختيار مركز الفحص, و في حالة
                            قرر المشتري عدم فحص المركبه لا يحق له الاعتراض على حالة المركبه.
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            يتحمل المشتري كافة رسوم نقل الملكيه و رهن المركبه و فك الرهن , كما يدفع
                            المشتري رسوم معامله ( ) دينار غير مسترده,
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            بالاضافة الى ان الدفعة الأولى غير مشمولة و ليس لها علاقه بالأقساط.
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            يتعهد المشتري و الكفلاء بتزويد المعرض في ارقام الهواتف او العناوين في
                            حال تغيرت.
                        </td>
                    </tr>
                    <tr style={{ fontSize: '14px' }} className="h-fit">
                        <td className="s4" colSpan={9}>
                            يتعهد المشتري بسداد الاقساط في موعدها بغض النظرعن اية ظروف قد يتعرض لها
                            او اي عطل تتعرض له المركبه, و لا يجوز تاخير القسط او تاجيله باي حال من
                            الاحوال.
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            المعرض غير ملزم بالاتصال و المطالبه او التذكير بموعد استحقاق القسط, على
                            المشتري معرفة استحقاق اقساطه و سدادها في موعدها.
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            يتعهد المعرض بفك رهن المركبه بعد السداد التام للاقساط
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            تضاف كمبياله بقيمة 10% من اجمالي قيمة الكمبيالات كحد ادنى 1000 دينار
                            وذلك بدل اتعاب المحاماة, وتعتبرهذه الكمبياله لاغيه اذا التزم المشتري في
                            الاقساط
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            و مستحقه في حالة اللجوء للقضاء تكون محاكم عمان و او دوائر التنفيذ
                            التابعة لها دون سواها هي المختصة لحل اي نزاع حول هذا العقد لا قدر الله
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            يحصل المشتري على خصم مقدارة ({' '}
                            <span id="discount">{values.discount} </span> ) دينار حال الالتزام
                            بالدفع خلال 5 ايام من تاريخ استحقاق الكمبيالة, دون وجود اقساط مكسورة.
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            تدفع الاقساط عن طريق الحسابات البنكيه المعتمده , و يعتبر القسط مدفوع اذا
                            حصل المشتري على ايصال بنكي او ايصال من المعرض.
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            على المشتري الاحتفاظ بكافة الايصالات و الايداعات البنكية لغايات التدقيق
                            و مراجعه الحساب اذا لزم الأمر.
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            يحق للمعرض/ الدائن رفع قضية بسند الرهن او الكمبيالات او كلاهما معا في
                            حال عدم الاتزام بسداد الاقساط في موعدها مع تكبيدكم الرسوم والمصاريف
                            والاتعاب والفائدة القانونية التي تحكم بها المحكمه بواقع ٩% من قيمة
                            الاقساط
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            وفي حال تم بيع المركبة بالمزاد العلني لا قدر الله ولم تف قيمة المركبة
                            قيمة الدين بالاضافه للرسوم والمصاريف يحق للدائن اقامة دعوى للمطالبة
                            بباقي الدين بالاضافة للرسوم والمصاريف والاتعاب التي تحكم بها المحكمة .
                        </td>
                    </tr>
                    <tr style={{ height: '35px', fontSize: '14px' }}>
                        <td className="s4" colSpan={9}>
                            في حال توقيع هذه الاتفاقية تعتبر منتجه لاثارها وتكون ملزمة للفريقان
                            بكافة بنودها وفي حال الاخلال بها يتم اللجوء للقضاء
                        </td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9">
                            عدد الاقساط : ({' '}
                            <span id="installment_num">{values.number_of_monthes}</span> )
                        </td>
                        <td className="s8" colSpan={5}>
                            قيمة الدفعه الاولي: ({' '}
                            <span id="down_payment">{values.dwonpayment}</span> )
                        </td>
                        <td className="s7" colSpan={3}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s12">
                            قيمة القسط: ( <span id="installment_val">{values.monthly_payment}</span>{' '}
                            )
                        </td>
                        <td className="s11" colSpan={5}>
                            تاريخ اول قسط:{' '}
                            <span id="first_installment_date">
                                {values.first_monthly_payment_date}
                            </span>
                        </td>
                        <td className="s10" colSpan={3}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9" colSpan={9}>
                            اجمالي قيمة الكمبيالات المتبقية : (
                            <span id="installment_total">
                                {values.total_amount} {values.total_amount_text} )
                            </span>
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            المدين: <span id="buyer_name2">{values.madean_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="sponsor1_phone">{values.madean_phone}</span>
                        </td>
                        <td className="s7" colSpan={2} rowSpan={2}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            عنوانه: <span id="buyer_address">{values.madean_location}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            كفيل :<span id="sponsor1_name">{values.kafeel_1_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="sponsor1_phone">{values.kafeel_1_phone}</span>
                        </td>
                        <td className="s7" colSpan={2} rowSpan={2}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            عنوانه: <span id="sponsor1_address">{values.kafeel_1_location}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            كفيل :<span id="sponsor2_name">{values.kafeel_2_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="sponsor2_phone">{values.kafeel_2_phone}</span>
                        </td>
                        <td className="s7" colSpan={2} rowSpan={2}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            عنوانه: <span id="sponsor2_address">{values.kafeel_2_location}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '30px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            كفيل :<span id="sponsor3_name">{values.kafeel_3_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="sponsor3_phone">{values.kafeel_3_phone}</span>
                        </td>
                        <td className="s7" colSpan={2} rowSpan={2}></td>
                    </tr>
                    <tr style={{ height: '25px', fontSize: '14px' }}>
                        <td className="s9" colSpan={7}>
                            عنوانه: <span id="sponsor3_address">{values.kafeel_3_location}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '28px' }}>
                        <td className="s8" colSpan={4}>
                            معرف: <span id="person1_name">{values.maerif_1_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="person1_phone">{values.maerif_1_phone}</span>
                        </td>
                        <td className="s9" colSpan={8}>
                            معرف: <span id="person2_name">{values.maerif_2_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="person2_phone">{values.maerif_2_phone}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '29px' }}>
                        <td className="s8" colSpan={4}>
                            معرف: <span id="person3_name">{values.maerif_3_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="person3_phone">{values.maerif_3_phone}</span>
                        </td>
                        <td className="s14" colSpan={8}>
                            معرف: <span id="person4_name">{values.maerif_4_name}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="person4_phone">{values?.maerif_4_phone}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <td className="s16">
                            المعرض:
                            <span
                                id="merchantValue"
                                style={{ fontSize: '18pt', fontWeight: 'bold', color: '#000000' }}
                            >
                                {values?.store?.label}
                            </span>
                            <span
                                style={{ fontSize: '10pt', fontWeight: 'bold', color: '#000000' }}
                            ></span>
                        </td>
                        <td className="s15" colSpan={6}>
                            التوقيع:
                        </td>
                        <td className="s15" colSpan={2}>
                            <span
                                style={{ fontSize: '12pt', fontWeight: 'bold', color: '#000000' }}
                            >
                                للاستفسار:
                            </span>
                            <span style={{ fontSize: '9pt', fontWeight: 'bold', color: '#000000' }}>
                                0797041861
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
