/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import styled from 'styled-components'
import theme from '../../theming/theme'

export const ICON_SIZE = 104

export const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${ICON_SIZE + 20}px, 1fr));
    background: ${({ theme }) => theme.colors.background};

    .isCapturing & {
        grid-template-columns: repeat(auto-fit, minmax(${ICON_SIZE}px, 1fr));
        background: transparent;
    }
`

export const colors = {
    lightNeutral: {
        background: theme.light.nivo.background,
        text: theme.light.colors.text,
        colors: ['#e2e2e2', '#cbcbcb', '#9a9a9a', '#838383', '#767676'],
    },
    lightColored: {
        background: theme.light.nivo.background,
        text: theme.light.colors.text,
        colors: ['#ffc6c6', '#ff8c80', '#ff6a51', '#f25038', '#e64027'],
    },
    darkNeutral: {
        background: theme.dark.nivo.background,
        text: theme.dark.colors.text,
        colors: ['#888888', '#777777', '#666666', '#555555', '#444444'],
    },
    darkColored: {
        background: theme.dark.nivo.background,
        text: theme.dark.colors.text,
        colors: ['#77b5f5', '#3b9cff', '#0e81f7', '#0770dc', '#005bb7'],
    },
}

export const Icon = styled.div`
    width: ${ICON_SIZE + 20}px;
    height: ${ICON_SIZE + 20}px;
    padding: 10px;
    background-repeat: no-repeat;
    background-size: ${ICON_SIZE}px ${ICON_SIZE}px;
    background-position: center center;
    background-color: ${({ type = 'lightNeutral' }) => colors[type].background};
    color: ${({ type = 'lightNeutral' }) => colors[type].text};

    .isCapturing & {
        width: ${ICON_SIZE}px;
        height: ${ICON_SIZE}px;
        padding: 0;
        background: transparent;
    }
`

export const Colors = styled.div`
    display: grid;
    grid-template-columns: 20px auto;
    font-size: 0.7rem;
    padding: 10px;
`

export const IconImg = ({ url }) => (
    <Icon
        style={{
            backgroundImage: `url(${url})`,
        }}
    />
)
