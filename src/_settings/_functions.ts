const getStyles = (styles: any = {}, list: string[] = []): string => {
  if (Object.keys(styles)?.length > 0 && list?.length > 0) {
    return list
      .map((item) => styles[item])
      .toString()
      .replaceAll(',', ' ')
  }
  return ''
}

export { getStyles }
