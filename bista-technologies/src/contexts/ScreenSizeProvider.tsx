import { createContext, useContext } from "react"
import { useMediaQuery } from "@uidotdev/usehooks";


type ScreenSizeProps = {
    isSmallDevice: boolean
    isMediumDevice: boolean
    isLargeDevice: boolean
    isExtraLargeDevice: boolean
}
const screenSizeContext = createContext<ScreenSizeProps | undefined>(undefined);


function useScreenSize(): ScreenSizeProps {
    const context = useContext(screenSizeContext);
    if (context === undefined) {
        throw new Error('useScreenSize must be used within a ScreenSizeProvider');
    }
    return context;
}
interface Props {
    children: React.ReactNode
}
function ScreenSizeProvider({ children }: Props) {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const isLargeDevice = useMediaQuery(
        "only screen and (min-width : 993px) and (max-width : 1200px)"
    );
    const isExtraLargeDevice = useMediaQuery(
        "only screen and (min-width : 1201px)"
    );

    return (
        <screenSizeContext.Provider value={{ isSmallDevice: isSmallDevice, isMediumDevice: isMediumDevice, isLargeDevice: isLargeDevice, isExtraLargeDevice: isExtraLargeDevice }}>
            {children}
        </screenSizeContext.Provider>
    )
}

export { useScreenSize, ScreenSizeProvider }