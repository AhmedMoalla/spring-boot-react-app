import {IconMoon, IconSun} from '@tabler/icons-react';
import {ActionIcon, useComputedColorScheme, useMantineColorScheme} from "@mantine/core";
import cx from "clsx";
import classes from './DarkThemeSwitch.module.css';


export function DarkThemeSwitch() {
    const { setColorScheme } = useMantineColorScheme({ keepTransitions: true});
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="md"
        aria-label="Toggle color scheme"
    >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
}