import React, { useEffect, useState } from 'react';
import { Compyala, Contract, Header, Istelam } from 'pages';
import { MainForm } from 'pages/mainForm/MainForm';
import { useForm } from 'react-hook-form';
import { Button } from 'components';
import { tafqeet } from 'helpers/Tafqeet';

const defaultValues = {
    madean_name: '',
    madean_national_number: '',
    madean_phone: '',
    madean_location: '',
    madean_work: '',
    kafeel_1_name: '',
    kafeel_1_national_number: '',
    kafeel_1_phone: '',
    kafeel_1_location: '',
    kafeel_1_work: '',
    kafeel_2_name: '',
    kafeel_2_national_number: '',
    kafeel_2_phone: '',
    kafeel_2_location: '',
    kafeel_2_work: '',
    kafeel_3_name: '',
    kafeel_3_national_number: '',
    kafeel_3_phone: '',
    kafeel_3_location: '',
    kafeel_3_work: '',
    car_price: 0,
    dwonpayment: 0,
    finance_charges: {
        label: '15%',
        value: 0.15,
    },
    number_of_monthes: 0,
    discount: 20,
    monthly_payment: 0,
    total_amount: 0,
    total_amount_text: '',
    bill_exchange: 2000,
    bill_exchange_text: '',
    store: {
        label: 'عليان موتورز',
        value: 'عليان موتورز',
    },
};
export const Home = () => {
    const [isContract, setIsContract] = useState(false);
    const [isCompyala, setIsCompyala] = useState(false);

    const form = useForm({ defaultValues: defaultValues });
    const Submit = (data: any) => {
        console.log('data', data);
        setIsContract(true);
    };
    const values = form.watch();
    useEffect(() => {
        const tmweel = values?.car_price - values?.dwonpayment;
        const charges = (tmweel * values?.number_of_monthes * values?.finance_charges?.value) / 12;
        const monthly_payment =
            Number((Number(charges) + Number(tmweel)) / Number(values?.number_of_monthes)) +
            Number(values?.discount);
        const total_amount = Math.ceil(monthly_payment) * values.number_of_monthes;
        form.setValue('monthly_payment', Math.ceil(monthly_payment));
        form.setValue('total_amount', total_amount);
        form.setValue(
            'total_amount_text',
            `${tafqeet(
                Math.ceil(monthly_payment) * values.number_of_monthes || values.total_amount,
            )} دينار اردني`,
        );
        const bill_exchange = Number(total_amount) * (10 / 100);
        if (bill_exchange > 2000) {
            form.setValue('bill_exchange', Math.ceil(bill_exchange));
            form.setValue(
                'bill_exchange_text',
                `${tafqeet(Number(Math.ceil(bill_exchange)))} دينار اردني`,
            );
        } else {
            form.setValue('bill_exchange', 2000);
            form.setValue('bill_exchange_text', `${tafqeet(Number(2000))} دينار اردني`);
        }
    }, [
        values.car_price,
        values.dwonpayment,
        values.finance_charges,
        values.number_of_monthes,
        values.discount,
    ]);
    useEffect(() => {
        const tmweel = values?.car_price - values?.dwonpayment;
        const charges = (tmweel * values?.number_of_monthes * values?.finance_charges?.value) / 12;

        form.setValue('monthly_payment', Math.ceil(values?.monthly_payment));
        form.setValue(
            'total_amount',
            Math.ceil(values?.monthly_payment) * values.number_of_monthes,
        );
        form.setValue(
            'total_amount_text',
            `${tafqeet(
                Math.ceil(values?.monthly_payment) * values.number_of_monthes ||
                    values.total_amount,
            )} دينار اردني`,
        );
    }, [values.monthly_payment]);

    const printDiv = (divId: string) => {
        var a = window.open('', '', 'height=1000, width=800') as any;
        var element = document.getElementById(divId)as any;
     
        a.document.write(
            `<html lang='ar' dir='rtl' style="  margin: 0; " >
            <head> 
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' 
            rel='stylesheet'
            integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
            crossorigin='anonymous' /> 
            <link
            href="src/pages/home/print.css?v=1.0"
            rel="stylesheet"
            crossorigin="anonymous"/>
            </head>
            <body id="print">
             ${element?.innerHTML}
            </body>
            </html>`,
        );
        a.document.close();
        a.print();
    };
    return (
        <div className="flex flex-col" >
            {isContract ? (
                <>
                    <Contract {...{ form }} />
                    <div className="flex justify-center gap-56 mt-9 ">
                        <Button
                            type="button"
                            className="h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center"
                            variant="secondary"
                            onClick={() => {
                                setIsContract(false);
                                setIsCompyala(true);
                                printDiv('Contract');
                            }}
                        >
                            <span>طباعة</span>
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            className=" h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center  "
                            onClick={() => {
                                setIsContract(false);
                                setIsCompyala(false);
                            }}
                        >
                            <span className="text-[#4D5673]"> رجوع</span>
                        </Button>
                    </div>
                </>
            ) : isCompyala ? (
                <>
                    <Compyala {...{ form }} />
                    <div className="flex justify-center gap-56 mt-9 ">
                        <Button
                            type="button"
                            className="h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center"
                            variant="secondary"
                            onClick={() => {
                                setIsContract(false);
                                setIsCompyala(false);
                                printDiv('Compyala');
                            }}
                        >
                            <span>طباعة</span>
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            className=" h-9 px-7 py-3.5 capitalize flex align-middle justify-center items-center  "
                            onClick={() => {
                                setIsContract(true);
                                setIsCompyala(false);
                            }}
                        >
                            <span className="text-[#4D5673]"> رجوع</span>
                        </Button>
                    </div>
                </>
            ) : (
                <MainForm {...{ form, Submit, defaultValues }} />
            )}
        </div>
    );
};
