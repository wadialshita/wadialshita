import { Footer, Header, SuspenseView } from 'layout/components';
import { memo, ReactNode, Suspense } from 'react';
import { Body, Content, Main } from './Theme';

interface DashboradLayoutProps {
    children: ReactNode;
}

export const DashboardLayout = memo(({ children }: DashboradLayoutProps) => {
    return (
        <Main>
            <Body>
                <Suspense fallback={<SuspenseView />}>
                    <Header />
                    <Content>
                        <div className=" w-full xl:max-w-[1920px] xl:me-auto">{children}</div>
                    </Content>
                </Suspense>
            </Body>
        </Main>
    );
});
