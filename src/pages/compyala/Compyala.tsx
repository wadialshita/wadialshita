import moment from 'moment';
import React from 'react';

export const Compyala = ({ form }: any) => {
    const values = form.getValues();
    const today = moment().format('YYYY-MM-DD');
    return (
        <div role="main" className="form-all mb-2" id="Compyala">
            <table
                className="text-dark"
                cellSpacing={0}
                cellPadding={0}
                style={{ border: 'solid 3px black' }}
            >
                <tbody>
                    <tr style={{ height: '25px' }}>
                        <td colSpan={6}>
                            اسم الــمـديــن: <span id="kom_buyer_name">{values.madean_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني: <span id="kom_buyer_id">{values.madean_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '27px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor1_name">{values.kafeel_1_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor1_id">{values.kafeel_1_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor2_name">{values.kafeel_2_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor2_id">{values.kafeel_2_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor3_name">{values.kafeel_3_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor3_id">{values.kafeel_3_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={4}>
                            تاريخ الاستحقاق:{' '}
                            <span id="kom_claim_date">{values.first_monthly_payment_date}</span>
                        </td>
                        <td colSpan={4}>الرقم: 1\2</td>
                        <td colSpan={1} className="text-center">
                            فلس
                        </td>
                        <td colSpan={3} className="text-center">
                            دينار
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={3}>حررت في عــمـــــان</td>
                        <td colSpan={4}>
                            و بتاريخ <span id="kom_write_date">{today}</span>
                        </td>
                        <td colSpan={1}>المبلغ رقم</td>
                        <td
                            colSpan={1}
                            className="fw-bold text-center"
                            style={{ border: 'solid 3px black' }}
                        >
                            ***
                        </td>
                        <td
                            colSpan={3}
                            className="fw-bold text-center"
                            style={{ border: 'solid 3px black' }}
                        >
                            <span id="kom_price_num">{values.total_amount}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={12} className="text-center">
                            بموجب هذه الكمبيالة و بتاريخها ادفع انا الموقع ادناه لامر
                            <span className="fw-bold">مؤسسة عماد الدين عليان التجارية</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={1}>المبلغ المرقم اعلاه و قدره</td>
                        <td colSpan={11} style={{ backgroundColor: '#eee' }}>
                            <span id="kom_price_write" className="fw-bold">
                                {values.total_amount_text}
                            </span>
                        </td>
                    </tr>
                    <tr style={{ height: '19px' }}>
                        <td colSpan={12} className="text-center">
                            و القيمة وصلتني.......................................نقدا
                            ..............................................
                            <br />
                            قد استلمت البضاعة المذكورة خالية من كل عيب ونقص بعد معاينتها و قبولها
                            واذا تاخرت عن الدفع عند الاستحقاق اضمن للدائن
                            <br />
                            او حاملها دفع المبلغ مع الفائدة القانونية من تاريخ الاستحقاق دون حاجة
                            لاي انذار او اخطار واني اسقط ايضا حق الادعاء بكذب
                            <br />
                            الاقرار وطلب اليمين, و عند استحقاق اي قسط او دفعة ولم تدفع في تاريخها
                            تستحق كامل الدفعات اللاحقة.
                        </td>
                    </tr>
                    <tr style={{ height: '29px' }}>
                        <td colSpan={12} className="fw-bold text-center">
                            اكفل المدين عند الاستحقاق و بعده
                        </td>
                    </tr>
                    <tr style={{ height: '110px' }}>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_3_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_2_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_1_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                توقيع المدين
                                <span>{values.madean_name}</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <table
                className="text-dark"
                cellSpacing={0}
                cellPadding={0}
                style={{ border: 'solid 3px black' }}
            >
                <tbody>
                    <tr style={{ height: '25px' }}>
                        <td colSpan={6}>
                            اسم الــمـديــن: <span id="kom_buyer_name">{values.madean_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني: <span id="kom_buyer_id">{values.madean_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '27px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor1_name">{values.kafeel_1_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor1_id">{values.kafeel_1_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor2_name">{values.kafeel_2_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor2_id">{values.kafeel_2_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={6}>
                            الــكــفــيــــــــــــل:{' '}
                            <span id="kom_sponsor3_name">{values.kafeel_3_name}</span>
                        </td>
                        <td colSpan={6}>
                            ر.وطني:{' '}
                            <span id="kom_sponsor3_id">{values.kafeel_3_national_number}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={4}>
                            تاريخ الاستحقاق:{' '}
                            <span id="kom_claim_date">{values.first_monthly_payment_date}</span>
                        </td>
                        <td colSpan={4}>الرقم: 2\2</td>
                        <td colSpan={1} className="text-center">
                            فلس
                        </td>
                        <td colSpan={3} className="text-center">
                            دينار
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={3}>حررت في عــمـــــان</td>
                        <td colSpan={4}>
                            و بتاريخ <span id="kom_write_date">{today}</span>
                        </td>
                        <td colSpan={1}>المبلغ رقم</td>
                        <td
                            colSpan={1}
                            className="fw-bold text-center"
                            style={{ border: 'solid 3px black' }}
                        >
                            ***
                        </td>
                        <td
                            colSpan={3}
                            className="fw-bold text-center"
                            style={{ border: 'solid 3px black' }}
                        >
                            <span id="kom_price_num">{values.bill_exchange}</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={12} className="text-center">
                            بموجب هذه الكمبيالة و بتاريخها ادفع انا الموقع ادناه لامر
                            <span className="fw-bold">مؤسسة عماد الدين عليان التجارية</span>
                        </td>
                    </tr>
                    <tr style={{ height: '26px' }}>
                        <td colSpan={1}>المبلغ المرقم اعلاه و قدره</td>
                        <td colSpan={11} style={{ backgroundColor: '#eee' }}>
                            <span id="kom_price_write" className="fw-bold">
                                {values.bill_exchange_text}
                            </span>
                        </td>
                    </tr>
                    <tr style={{ height: '19px' }}>
                        <td colSpan={12} className="text-center">
                            و القيمة وصلتني.......................................نقدا
                            ..............................................
                            <br />
                            قد استلمت البضاعة المذكورة خالية من كل عيب ونقص بعد معاينتها و قبولها
                            واذا تاخرت عن الدفع عند الاستحقاق اضمن للدائن
                            <br />
                            او حاملها دفع المبلغ مع الفائدة القانونية من تاريخ الاستحقاق دون حاجة
                            لاي انذار او اخطار واني اسقط ايضا حق الادعاء بكذب
                            <br />
                            الاقرار وطلب اليمين, و عند استحقاق اي قسط او دفعة ولم تدفع في تاريخها
                            تستحق كامل الدفعات اللاحقة.
                        </td>
                    </tr>
                    <tr style={{ height: '29px' }}>
                        <td colSpan={12} className="fw-bold text-center">
                            اكفل المدين عند الاستحقاق و بعده
                        </td>
                    </tr>
                    <tr style={{ height: '110px' }}>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_3_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_2_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                كفيل
                                <span>{values.kafeel_1_name}</span>
                            </span>
                        </td>
                        <td colSpan={3} className="fw-bold text-center w-25 align-baseline">
                            <span className="d-flex flex-column">
                                توقيع المدين
                                <span>{values.madean_name}</span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
