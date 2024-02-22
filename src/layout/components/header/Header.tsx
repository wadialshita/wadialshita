import logo from 'assets/logo.jpeg';
export const Header = () => {
    return (
        <div className="text-3xl text-primary lg:text-secondary-200 bg-secondary-100 font-bold bg-[#e9ebea]">
            <div className="flex w-full items-center gap-4">
                <img src={logo} className="w-[150px] h-20" />
                <span>Elayan Motors</span>
            </div>
        </div>
    );
};
