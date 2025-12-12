import { useEffect } from 'react';

export default function Admin() {
    useEffect(() => {
        window.location.href = '/admin/index.html';
    }, []);

    return <div>Redirecting to admin panel...</div>;
}
