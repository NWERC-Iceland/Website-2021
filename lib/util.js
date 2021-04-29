
export const Email = (props) => pug`
    a(href="mailto:" + props.address)= props.address
`;

