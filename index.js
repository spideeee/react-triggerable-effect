import { useState, useEffect } from "react";

export default function useTrigerrableEffect(callback, dependencies){
    const [triggerValue, triggerEffect] = useState(false);
    useEffect(callback, [triggerValue, ...dependencies]);
    return () => triggerEffect(value => !value);
}