import {injectIntl} from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
// import AnchorLink from "react-anchor-link-smooth-scroll"
import HeaderLayout from "./headerLayout"

const Header = () => {
	return (
		<HeaderLayout>
			<div className="flex flex-col items-center justify-center sm:flex-row">
				<nav className="mb-1 sm:mb-0">
				</nav>
				<div>
					<Language/>
				</div>
			</div>
		</HeaderLayout>
	)
}
export default injectIntl(Header)
