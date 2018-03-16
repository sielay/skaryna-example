import * as React from "react";
import { ISkarynaPageProps, Markdown } from "../../skaryna/lib/generator/skaryna"; // TODO
import Default from "./default";

export default class Page extends React.Component {

    public props: Readonly<ISkarynaPageProps>;

    constructor(props: ISkarynaPageProps) {
        super(props);
    }

    public render() {
        return <Default {...this.props}><Markdown source={this.props.markdown} /></Default>
    }
}
