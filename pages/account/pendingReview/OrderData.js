import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Order from './Order';
import {MyDataContext} from './index';
import NoOrders from './NoOrders';
export default function OrderData({checker}) {
    const router = useRouter();
    return (
        <MyDataContext.Consumer>
            {(orders) => (
                <div className="box-border h-[100%]">
                    <header className="py-2 px-4">
                        <div className="flex items-center border-b">
                            <ArrowBackIcon
                                className="mr-2 cursor-pointer hover:text-gray-500"
                                onClick={() => router.back()}
                            />
                            <h2 className="py-2">Pending Reviews</h2>
                        </div>
                    </header>
                    <div className="gap-5 flex flex-col flex-wrap items-stretch text-center py-8 h-[100%]">
                        {checker ? (
                            orders.map((order, index) => {
                                if (order.status === "delivered") {
                                    return <Order order={order} key={index} />;
                                }
                                return null;
                            })) : (<NoOrders />)
                        }
                    </div>
                </div>
            )}
        </MyDataContext.Consumer>
    );
}