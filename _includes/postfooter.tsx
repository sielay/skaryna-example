import { ISkarynaPageProps } from "../../skaryna/lib/generator/skaryna"; // TODO

export default (props: ISkarynaPageProps) => <div className="py2 post-footer">
    {props.author_avatar && <img src={props.autor_avatar} alt={props.author} className="avatar" />}
    <p>
        Pixyll is an open-source Jekyll theme that's built by <a href="http://johnotander.com">John Otander</a>.
        When he's not writing code and building things, he likes to ski. A. Lot.
  </p>
    <p>
        Follow him on <a href="https://twitter.com/4lpine">Twitter</a>.
  </p>
</div>;

