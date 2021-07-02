import { useState, useEffect, useCallback } from "react";

export default function useTrigerrableEffect(callback, dependencies){
    const [triggerValue, triggerEffect] = useState(false);
    useEffect(callback, [triggerValue, ...dependencies]);
    return useCallback(() => triggerEffect(value => !value), []);
}