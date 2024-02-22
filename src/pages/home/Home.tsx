import React, { useState } from 'react';
import { Compyala, Contract, Header, Istelam } from 'pages';
import { MainForm } from 'pages/mainForm/MainForm';
import { useForm } from 'react-hook-form';
import { Button } from 'components';

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
};
export const Home = () => {
    const [isContract, setIsContract] = useState(false);
    const [isCompyala, setIsCompyala] = useState(false);

    const form = useForm({ defaultValues: defaultValues });
    const Submit = (data: any) => {
        console.log('data', data);
        setIsContract(true);
    };
    const printDiv = (divId: string) => {
        var divContents = document.getElementById(divId)?.innerHTML;
        var a = window.open('', '', 'height=500, width=500') as any;
        a.document.write('<html>');
        a.document.write('<body > ');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    };
    return (
        <div className="flex flex-col">
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
