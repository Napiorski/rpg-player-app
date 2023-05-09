import * as React from "react";
import styled from "@emotion/styled";

const WarningView = styled.span`
  padding: 6px;
`;

const StyledWarning = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

type WarningProps = {
  children: React.ReactNode;
};

export function Warning({ children }: WarningProps) {
  return (
    <WarningView>
      <StyledWarning>{children}</StyledWarning>
    </WarningView>
  );
}
