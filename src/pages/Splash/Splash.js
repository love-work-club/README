import React, { useState } from 'react';

export default function Splash() {
    const [loading, setLoading] = useState(false);

    setTimeout(() => {
        setLoading(true);
    }, 2000);

    return <div>Splash</div>;
}
