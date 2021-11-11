import { Component} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { menu_items } from '../lib/navigation.js';

function MenuButton(props) {
  const onClick = () => props.parent.toggleMenu(props.id)
  const isOpen = props.parent.isMenuOpen(props.id)

  return pug`
    button.block.text-gray-800.hover_text-gray-600.focus_text-gray-600.focus_outline-none(onClick=onClick, className=props.className)
      svg.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20")
        if !isOpen
          case props.style
            when 'hamburger'
              path(d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z")
            when 'arrow'
              path(d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z")
        else
          case props.style
            when 'hamburger'
              path(d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z")
            when 'arrow'
              path(d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z")
  `;
}

export default class Layout extends Component {
  static defaultProps = {
    icpcBanner: true,
    // icpcBanner: false,
    icpcSponsors: true,
    // icpcSponsors: false,
    ruBanner: false,
    // ruBanner: true,
    showSponsors: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      menuOpen: {},
      atTop: true,
    }

    this.onScroll = this.onScroll.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.clickOutside = this.clickOutside.bind(this)
  }

  onScroll(e) {
    this.setState({
      atTop: window.pageYOffset == 0
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  isMenuOpen(id) {
    return this.state.menuOpen.hasOwnProperty(id) && this.state.menuOpen[id]
  }

  toggleMenu(id) {
    var menuOpen = this.state.menuOpen
    menuOpen[id] = !this.isMenuOpen(id)
    this.setState({ menuOpen })
  }

  clickOutside() {
    var menuOpen = this.state.menuOpen
    menuOpen['main'] = false
    this.setState({ menuOpen })
  }

  render() {
    const that = this

    return pug`
      Head
        title NWERC 2021
        link(rel="icon" href="/images/favicon_small.png" sizes="32x32")
        link(rel="icon" href="/images/favicon_large.png" sizes="192x192")
        link(rel="apple-touch-icon-precomposed" href="/images/favicon_large.png")
        meta(name="msapplication-TileImage" content="/images/favicon_large.png")

      div.fixed.top-0.left-0.right-0.z-10.bg-white.transition.duration-100.sm_duration-200(className=!this.state.atTop || this.isMenuOpen('main') ? "bg-gray-100 shadow-menu" : "")
        div.container.mx-auto.sm_flex.sm_justify-between.sm_items-center
          div.flex.justify-between.items-center.h-24.mx-8
            Link(href="/")
              a.focus_outline-none
                img.h-12(src="/images/nwerc-2021-logo.png")

            MenuButton.h-8.w-8.sm_hidden(parent=that, id='main', style='hamburger')

          ul.border-t-2.sm_block.sm_border-0.sm_flex.sm_pr-6(className=this.isMenuOpen('main') ? "" : "hidden")
            each menu_item in menu_items
              li.border-b-2.sm_border-b-0
                div.flex.items-center.bg-gray-200.sm_bg-transparent
                  Link(href=menu_item.url)
                    a.menu_item.block.flex-grow.px-4.sm_px-2.md_px-4.py-2.text-gray-800.sm_transition.sm_duration-100.sm_hover_bg-gray-700.sm_hover_text-white.sm_rounded.sm_relative= menu_item.title
                      if menu_item.sub && menu_item.sub.length > 0
                        div.absolute.hidden
                          ul.mt-3.-ml-5.w-48.rounded.bg-white.border-2.border-gray-100.shadow-lg.overflow-hidden
                            each sub_item, index in menu_item.sub
                              li
                                Link(href=sub_item.url)
                                  a.block.px-4.py-2.text-gray-700.hover_bg-gray-700.hover_text-white.border-gray-200(className=index != 0 ? "border-t-2" : "")= sub_item.title
                  if menu_item.sub && menu_item.sub.length > 0
                    MenuButton.h-8.w-8.p-2.mr-4.sm_hidden(parent=that, id=menu_item.title, style='arrow')
                ul.sm_hidden(className=this.isMenuOpen(menu_item.title) ? "" : "hidden")
                  each sub_item in menu_item.sub || []
                    li
                      Link(href=sub_item.url)
                        a.block.bg-gray-300.pl-6.pr-4.py-2.text-gray-700= sub_item.title

      div(onClick=this.clickOutside)
        div.container.mx-auto.pb-10.pt-24.px-4
          if this.props.icpcBanner
            div.mt-0.relative
              img(src="/images/icpc-regional-header-master-jb-hua_Europe-NWERC_art.png")
              a.block.absolute(style={'top': '8%', 'left': '75%', 'height': '70%', 'width': '12%'}, href="https://www.jetbrains.com/", target="_blank")
              a.block.absolute(style={'top': '8%', 'left': '87%', 'height': '70%', 'width': '12%'}, href="https://www.huawei.com/en/", target="_blank")

          if this.props.ruBanner
            div.mt-2.py-64.relative.bg-cover.bg-center.rounded(style={backgroundImage: "linear-gradient(rgba(255,255,255,0.0), rgba(0,0,0,0.55)), url(/images/ru-background.jpg)"})
              div.absolute.bottom-0.px-6.py-6
                h1.text-gray-200.font-black.text-xl Northwestern Europe Regional Contest
                h2.text-gray-100.font-medium.text-md.flex
                  svg.pt-1.h-5.w-5.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
                    path(d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z")
                  span November 20-21, 2021
                h3.text-gray-100.font-medium.text-md.flex
                  svg.pt-1.h-5.w-5.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
                    path(d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z")
                  span Online contest
                  // Reykjavík University, Iceland

          if this.props.icpcBanner && !this.props.ruBanner
            div.mt-6
          div.mt-2.sm_grid.grid-cols-6.gap-4.content
            div.col-span-4.px-1(className=this.props.showSponsors ? "" : "col-start-2")
              = this.props.children
            if this.props.showSponsors
              div.col-span-2
                h2.mt-6 Partners
                p.max-w-xs.mx-auto
                  a.block.mt-2(href="https://en.ru.is/", target="_blank")
                    img.mx-auto(src="/images/HR_logo_midjad_transparent.png")
                if this.props.icpcSponsors
                  p.max-w-xs.mx-auto
                    a.block.mt-4(href="https://aws.amazon.com/education/awseducate/", target="_blank")
                      img.mx-auto(src="/images/sponsor-EdTech-icpc-gold-aws-educate-cropped.png")
                p.max-w-xs.mx-auto
                  a.block.mt-8(href="https://www.kattis.com/", target="_blank")
                    img.mx-auto(src="/images/kattis-logo.png")
                p.max-w-xs.mx-auto
                  a.block.mt-8(href="https://www.domjudge.org/", target="_blank")
                    img.mx-auto(src="/images/DOMjudgelogo.png" style={'max-height': '200px'})
                p.text-center
                    span.block.mt-4 Want to become a partner? Reach out at #[a(href="mailto:contact@nwerc.eu") contact@nwerc.eu]

`;
  }
}
