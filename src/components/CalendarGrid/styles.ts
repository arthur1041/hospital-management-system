import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4.5fr 4.5fr 4.5fr 4.5fr 4.5fr;
    gap: 10px;
    
    .grid-col-item {
        &.calendar-item {
            height: 90px;
            border: 1px dotted ${({ theme }) => { return theme.colors.gray }};
            border-radius: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        &.calendar-item {
            padding: 5px;
            color: ${({ theme }) => theme.colors.white};

            .calendar-cell-content-wrapper {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                overflow: hidden;
                
                
                .patient-name {
                    font-size: 15px;
                    font-weight: bold;
                }

                .appointment-description {    
                    text-align: center;
                    font-size: 11px;
                }
            }

            &.no-margin-top{
                margin-top: 0;
            }

            &.booked {
                background-color: ${({ theme }) => theme.colors.primaryColor};
            
                &.pending {
                    background-color: ${({ theme }) => theme.colors.warningColor};
                }

                &.completed {
                    background-color: ${({ theme }) => theme.colors.secondaryColor};
                }

                &.cancelled {
                    background-color: ${({ theme }) => theme.colors.infoColor};
                }

                &.absent {
                    background-color: ${({ theme }) => theme.colors.dangerColor};
                }
            }

            &.merged-by-2 {
                height: 190px;
            }

            &.merged-by-3 {
                height: 290px;
            }

            &.merged-by-4 {
                height: 390px;
            }
        }

        &.time-of-the-day {
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: right;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        &.time-of-the-day {
            &.no-margin-top{
                margin-top: 0;
            }
        }

        &.day-of-the-week {
            display: flex;
            justify-content: center;
            height: 20px;
        }

        &.corner {
            height: 20px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: 1fr 150px 150px 150px 150px 150px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        
    }
`;