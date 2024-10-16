"use client";

import { addPost } from '@/lib/action';
import React from 'react';
import { useFormState } from 'react-dom';

const ActivePostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost);

    const handleRefresh = () => {
        window.location.href = '/addpost';
    };

    return (
        <form className="form" action={formAction}>
            <h3>Add New Post</h3>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="slug" placeholder="Slug" />
            <input type="text" name="img" placeholder="Image URL" />
            <textarea name="desc" placeholder="Description" rows={10}></textarea>
            <input type="hidden" name="userId" value={userId} />
            <button type="button" onClick={handleRefresh}>Add</button>
            {state?.error && (
                <div
                    style={{
                        marginBottom: '13px',
                        marginTop: '13px',
                        textAlign: 'center',
                    }}
                    className="error"
                >
                    {state.error}
                </div>
            )}
        </form>
    );
};

export default ActivePostForm;
