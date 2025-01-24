export type RoundedCorners = {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  topAll?: boolean;
  bottomAll?: boolean;
};

export type RoundedCorner = boolean | RoundedCorners;
