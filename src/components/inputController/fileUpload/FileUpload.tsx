import React from 'react';
// import { ReactComponent as FileSVG } from 'assets/icons/file.svg';
import UploadSVG from 'assets/icons/upload.svg';
import CloseSVG from 'assets/icons/close-circle.svg';
import { FileUploader } from 'react-drag-drop-files';
import { includes, isArray } from 'lodash';
import { cn } from 'lib/utils';
const types = ['jpg', 'png', 'jpeg', 'pdf'];
interface InputProps {
    type: React.HTMLInputTypeAttribute;
    className?: any;
    placeholder?: string;
    disabled?: boolean;
    field?: any;
    name?: string;
    filetypes?: string[];
    subPlaceholder?: string;
    control?: any;
    options?: any[];
    setError?: Function;
    contentClassName?: string;
}
export const FileUpload = ({
    type,
    field,
    className,
    placeholder,
    disabled,
    filetypes,
    name,
    subPlaceholder,
    setError,
    contentClassName,
    ...rest
}: InputProps) => {
    const handelClear = (event: any) => {
        event.stopPropagation();
        field?.onChange(null);
    };
    const readFileAndUpdate = (files: any) => {
        if (files) {
            const processedFilesPromises = Array.from(files).map((file: any) => {
                return new Promise((resolve) => {
                    resolve({
                        file: file,
                        fileName: file?.name,
                    });
                });
            });

            Promise.all(processedFilesPromises).then((fileDataArray) => {
                const filteredFileDataArray = fileDataArray.filter(Boolean);
                field?.onChange(filteredFileDataArray);
            });
        }
    };

    return (
        <>
            <FileUploader
                className={cn(
                    className,
                    'btn px-5 my-5 w-100 bg-background border-dashed border border-[#044DA14D]',
                )}
                type="file"
                id={name}
                name={name}
                types={filetypes ? filetypes : types}
                hidden
                multiple
                disabled={field?.value?.length}
                handleChange={(_file: any) => {
                    readFileAndUpdate(_file);
                }}
            >
                <div className={cn('pt-2', contentClassName)}>
                    {field?.value?.length ? (
                        <div>
                            <label
                                htmlFor={name}
                                className=" bg-light text-left   my-1 w-full justify-between    "
                            >
                                <div
                                    className={cn(
                                        'flex gap-5 border-dashed border-[#044DA14D] rounded-md border   items-center p-8',
                                        className,
                                    )}
                                >
                                    <img src={UploadSVG} className=" w-12 h-12" />
                                    {field?.value ? (
                                        <div className="flex flex-wrap w-full">
                                            {isArray(field?.value) ? (
                                                field?.value?.map((el: any) => (
                                                    <div
                                                        key={el?.fileName}
                                                        className={` ${'d-flex flex-column justify-content-center align-items-center fw-bold  '}`}
                                                    >
                                                        <span className={`mt-3`}>
                                                            {' '}
                                                            {el?.fileName}
                                                        </span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div
                                                    className={` ${'d-flex flex-column justify-content-center align-items-center fw-bold'}`}
                                                >
                                                    <span className={`mt-3`}> {field?.value}</span>
                                                </div>
                                            )}
                                        </div>
                                    ) : includes(field?.value, '.pdf') ? (
                                        <div className="d-flex flex-column justify-content-center align-items-center fw-bold ">
                                            {/* <FileSVG /> */}
                                            <span className="mt-3">
                                                {
                                                    field?.value?.split('/')?.[
                                                        field?.value?.split('/')?.length - 1
                                                    ]
                                                }
                                            </span>
                                        </div>
                                    ) : includes(field?.value, '.mp4') ? (
                                        <video src={field?.value} controls={false} autoPlay />
                                    ) : (
                                        <img
                                            src={field?.value}
                                            style={{ objectFit: 'contain' }}
                                            className="align-self-end w-100 h-100 "
                                            alt=""
                                        />
                                    )}
                                    <img
                                        src={CloseSVG}
                                        onClick={handelClear}
                                        className="   top-12 right-3 cursor-pointer w-8 h-8"
                                    />
                                </div>
                            </label>
                        </div>
                    ) : (
                        <div>
                            <label
                                htmlFor={name}
                                className="btn bg-light text-left  w-100 cursor-pointer "
                            >
                                <div
                                    className={cn(
                                        'flex gap-5 rounded-md border-dashed border border-[#044DA14D]  p-8',
                                        className,
                                    )}
                                >
                                    <img src={UploadSVG} className="cursor-pointer" />
                                    <div className="flex flex-col">
                                        <span className="sm:text-xl text-[14px] font-medium text-black  capitalize">
                                            {placeholder ? placeholder : 'Drag and Drop here '}
                                        </span>
                                        <span className="sm:text-base text-[12px] font-normal  text-gray capitalize">
                                            {subPlaceholder ? subPlaceholder : 'or browse'}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )}
                </div>
            </FileUploader>
        </>
    );
};
