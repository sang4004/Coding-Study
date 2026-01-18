import React, {
  ChangeEvent,
  HTMLAttributes,
  ReactElement,
  forwardRef, // ref를 외부에서 전달받기 위해 사용
} from "react";

/**
 * Props 인터페이스
 *
 * HTMLAttributes<HTMLInputElement> 를 확장해서
 * - input 태그가 가질 수 있는 모든 native 속성들을 받을 수 있게 함
 *
 * (ex: placeholder, maxLength, name, autoComplete 등)
 */
interface Props extends HTMLAttributes<HTMLInputElement> {
  /** input과 label을 연결하기 위한 고유 id */
  id: string;

  /** label에 표시될 텍스트 */
  label: string;

  /** uncontrolled 컴포넌트에서 사용할 초기값 */
  defaultValue?: string;

  /** 비활성화 여부 */
  disabled?: boolean;

  /** 에러 메시지 (있을 때만 화면에 표시) */
  errorText?: string;

  /** controlled 컴포넌트용 onChange */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

  /** controlled 컴포넌트용 value */
  value?: string;
}

/**
 * Generic TextInput 컴포넌트
 *
 * - forwardRef를 사용해 부모에서 input DOM에 직접 접근 가능
 * - controlled / uncontrolled 둘 다 지원
 * - label + input 구조 유지 (접근성)
 */
const Solution = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref): ReactElement => {
    /**
     * props 구조 분해
     * - 명시적으로 쓰는 값들과
     * - 나머지 native input 속성(rest)을 분리
     */
    const {
      id,
      label,
      errorText,
      disabled,
      defaultValue,
      onChange,
      value,
      ...rest // placeholder, name, maxLength 등
    } = props;

    return (
      <div>
        {/* label과 input을 htmlFor / id로 연결 (접근성 필수) */}
        <label htmlFor={id}>{label}</label>

        {/* 실제 input 요소 */}
        <input
          ref={ref} // 부모 컴포넌트에서 ref 접근 가능
          id={id} // label과 연결
          type="text" // 기본 type 지정
          disabled={disabled} // 비활성화 처리
          value={value} // controlled 컴포넌트 지원
          defaultValue={defaultValue} // uncontrolled 컴포넌트 지원
          onChange={onChange} // 값 변경 핸들러
          {...rest} // native input 속성 전달
        />

        {/* errorText가 있을 때만 에러 메시지 출력 */}
        {errorText ? <div>{errorText}</div> : null}
      </div>
    );
  }
);

export default Solution;
