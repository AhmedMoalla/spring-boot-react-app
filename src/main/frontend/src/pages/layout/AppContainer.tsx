import {Burger, Container, Group} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {MantineLogo} from '@mantinex/mantine-logo';
import {NavLink, Outlet} from "react-router";
import cx from 'clsx';

import classes from './AppContainer.module.css';
import {DarkThemeSwitch} from "../../components/DarkThemeSwitch.tsx";

const links = [
    {link: '/', label: 'Home'},
    {link: '/features', label: 'Features'},
    {link: '/pricing', label: 'Pricing'},
    {link: '/learn', label: 'Learn'},
    {link: '/community', label: 'Community'},
];

function HeaderLink({label, link}) {
    return (
        <NavLink to={link} end
            className={({ isActive }) => isActive ? cx(classes.link, classes.active) : classes.link}>
            {label}
        </NavLink>
    )
}

export function AppContainer() {
    const [opened, {toggle}] = useDisclosure(false);
    return (
        <>
            <header className={classes.header}>
                <Container size="md" className={classes.inner}>
                    <MantineLogo size={28} color="green"/>
                    <Group gap={5} visibleFrom="xs">
                        {links.map((link) => <HeaderLink key={link.label} label={link.label} link={link.link} />)}
                    </Group>
                    <DarkThemeSwitch />
                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
                </Container>
            </header>
            <Outlet/>
        </>
    );
}