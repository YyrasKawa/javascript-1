const url = 'https://purpleschool.ru/course/javascript';

// const res = url.split('/');
// console.log(res);


function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        console.log(protocol, _, host, path);
        console.log(`Protocol: ${protocol.split(":")[0]}`);
        console.log(`Host: ${host}`);
        console.log(`Site wayl: /${path.join("/")}`);
    }
}

getUrlParts(url);