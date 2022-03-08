const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  USER_ID: getEnvironmentVariable("USER_ID"),
  TEMPLATE_ID: getEnvironmentVariable("TEMPLATE_ID"),
  SERVICE_ID: getEnvironmentVariable("SERVICE_ID"),
  GA_ID: getEnvironmentVariable("NEXT_PUBLIC_GOOGLE_ANALYTICS"),
};
