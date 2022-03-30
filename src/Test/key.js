export const assertKeyWithClass = (status, keyElement) => {
  if (status) {
    expect(keyElement).toHaveClass(status);
  } else {
    expect(keyElement).toHaveClass("key");
    expect(keyElement.classList).toHaveLength(1);
  }
};
