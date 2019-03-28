/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import '../styles/index.css'
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import globalStyle from '../theming/GlobalStyle'
import theme from '../theming/theme'
import { themeContext } from '../theming/context'
import media from '../theming/mediaQueries'
import MiniNav from './nav/MiniNav'
import { globalDispatchContext, globalStateContext, globalStateReducer } from './state'

const Content = styled.div`
    margin-top: ${({ theme }) => theme.dimensions.headerHeight}px;
    margin-left: ${({ theme }) => theme.dimensions.miniNavWidth}px;
    overflow-x: hidden;

    .isCapturing & {
        background: transparent;
    }

    ${media.tablet`
        & {
            margin-left: 0;
        }
    `}

    ${media.mobile`
        & {
            margin-left: 0;
        }
    `}
`

const InnerContent = styled.div`
    padding-top: 10px;
    background-image: linear-gradient(
        -90deg,
        ${({ theme }) => theme.colors.gradientColor0},
        ${({ theme }) => theme.colors.gradientColor1}
    );
    background-size: 100% 150px;
    background-repeat: no-repeat;
    background-position: top left;

    .isCapturing & {
        background: transparent;
    }
`

const initialState = {
    theme: 'light',
}

const Layout = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState)
    const currentTheme = theme[state.theme]

    const isCapturing =
        children.props &&
        children.props.location &&
        children.props.location.search.indexOf('capture=1') !== -1
    const GlobalStyle = globalStyle(isCapturing)

    return (
        <globalDispatchContext.Provider value={dispatch}>
            <globalStateContext.Provider value={state}>
                <themeContext.Provider value={currentTheme}>
                    <ThemeProvider theme={currentTheme}>
                        <>
                            <GlobalStyle />
                            <Header />
                            <MiniNav />
                            <Content className={isCapturing ? 'isCapturing' : ''}>
                                <InnerContent>{children}</InnerContent>
                            </Content>
                        </>
                    </ThemeProvider>
                </themeContext.Provider>
            </globalStateContext.Provider>
        </globalDispatchContext.Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
